from sqlalchemy import select


from app.database import BaseRepo
from app.auth.models import User
from app.database.core import AbstractAsyncSession

from .models import Quiz
from .schemas import QuizAddDTO, QuizPreviewDTO




class QuizRepo(BaseRepo):
    _user: User = None


    def __init__(self, session: AbstractAsyncSession, user: User) -> None:
        super().__init__(session)
        self._user = user


    async def get_quiz(self, id: int) -> None:
        return (await self._session.execute(select(Quiz).where(Quiz.id == id))).first()


    async def get_previews(self) -> list[QuizPreviewDTO]:
        res = (await self._session.execute(select(Quiz).where(Quiz.user_id == self._user.id))).all()
        
        return [QuizPreviewDTO.model_validate(preview, from_attributes=True) for preview, in res]


    async def create(self, dto: QuizAddDTO) -> None:
        self._session.add(Quiz(**(dto.model_dump()), user_id=self._user.id, user=self._user))

