from sqlalchemy.orm import Mapped, mapped_column


from app.database import Base




class Quiz(Base):
    __tablename__ = 'quizzes'


    title: Mapped[str] = mapped_column(primary_key=True)
    com: Mapped[str] = mapped_column()

