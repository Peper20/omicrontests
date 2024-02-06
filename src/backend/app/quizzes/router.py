from fastapi import Depends, APIRouter


from app.auth import User, current_active_user
from app.database import AbstractAsyncSession


from .repos import QuizRepo




router = APIRouter(
    prefix='/quizzes',
    tags=['quizzes']
)



@router.get('/preview-quizzes')
async def preview(
    user: User = Depends(current_active_user),
    session: AbstractAsyncSession = Depends(),
):
    repo = QuizRepo(session)

    return [quiz.title for quiz, in await repo.get_users_quzzes()]
