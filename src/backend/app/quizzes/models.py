from datetime import datetime
from typing import Annotated
from uuid import UUID


from sqlalchemy import String
from sqlalchemy.sql import text
from sqlalchemy.orm import relationship, Mapped, mapped_column
from sqlalchemy import ForeignKey


from app.database import Base




Intpk = Annotated[int, mapped_column(primary_key=True, autoincrement=True)]
Created_at = Annotated[datetime, mapped_column(server_default=text("TIMEZONE('utc', now())"))]


class Quiz(Base):
    __tablename__ = 'quizzes'


    id: Mapped[Intpk]
    title: Mapped[str] = mapped_column(String(128))

    user: Mapped['User'] = relationship(back_populates='quizzes')
    user_id: Mapped[UUID] = mapped_column(ForeignKey('users.id', ondelete='CASCADE'))

    created_at: Mapped[Created_at]
