from fastapi_users.db import SQLAlchemyBaseUserTableUUID
from sqlalchemy.orm import relationship, Mapped, mapped_column


from app.database import Base




class User(SQLAlchemyBaseUserTableUUID, Base):
    __tablename__ = 'users'


    quizzes: Mapped[list['Quiz']] = relationship(
        back_populates='user'
    )