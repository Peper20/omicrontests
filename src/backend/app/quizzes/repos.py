from sqlalchemy import Select, select


from app.database import BaseRepo

from .models import Quiz




class QuizRepo(BaseRepo):
    _get_quzzes: Select = select(Quiz)


    async def get_users_quzzes(self, user=None) -> list[tuple[Quiz]]:
        return (await self._session.execute(self._get_quzzes)).all()
