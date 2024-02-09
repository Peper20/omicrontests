from sqlalchemy import select


from app.database import BaseRepo

from .models import Quiz




class QuizRepo(BaseRepo):
    async def get_users_quzzes(self, user=None) -> list[tuple[Quiz]]:
        return (await self._session.execute(select(Quiz))).all()


    async def create_new(self, title='some title') -> None:
        self._session.add(Quiz(title=title))

