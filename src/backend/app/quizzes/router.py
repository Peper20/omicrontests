from fastapi import Depends, APIRouter, status
from fastapi.responses import Response


from app.auth import User, current_active_user
from app.database import AbstractAsyncSession


from .repos import QuizRepo
from .schemas import QuizAddDTO, QuizPreviewDTO




router = APIRouter(
    prefix='/quizzes',
    tags=['quizzes']
)


@router.post('/create')
async def create(
    dto: QuizAddDTO,
    user: User = Depends(current_active_user),
    session: AbstractAsyncSession = Depends(),
) -> Response:
    repo: QuizRepo = QuizRepo(session, user)

    await repo.create(dto)
    await session.commit()

    return Response(status_code=status.HTTP_201_CREATED)


@router.get('/get-previews')
async def get_previews(
    user: User = Depends(current_active_user),
    session: AbstractAsyncSession = Depends(),
) -> list[QuizPreviewDTO]:
    repo: QuizRepo = QuizRepo(session, user)

    previews = await repo.get_previews()

    return previews


@router.get('/get-quiz/{id}')
async def get_quiz(
    id: int,
    user: User = Depends(current_active_user),
    session: AbstractAsyncSession = Depends(),
):
    repo: QuizRepo = QuizRepo(session, user)

    quiz = await repo.get_quiz(id)

    return quiz


'''
@router.post('/update-quiz/{id}')
async def get_quiz(
    id: int,
    user: User = Depends(current_active_user),
    session: AbstractAsyncSession = Depends(),
):
    repo: QuizRepo = QuizRepo(session, user)
'''

