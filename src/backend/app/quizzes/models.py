from datetime import datetime
from typing import Annotated
from uuid import UUID, uuid4


from sqlalchemy import String
from sqlalchemy.sql import text
from sqlalchemy.orm import Mapped, mapped_column


from app.database import Base




uuidpk = Annotated[UUID, mapped_column(primary_key=True, default=uuid4)]


class Quiz(Base):
    __tablename__ = 'quizzes'


    id: Mapped[uuidpk]
    title: Mapped[str] = mapped_column(String(128))

    created_at: Mapped[datetime] = mapped_column(server_default=text("TIMEZONE('utc', now())"))
