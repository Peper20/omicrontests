from sqlalchemy import insert


from app.database import init_all_models, Base, engine
from app.auth.models import User
from app.quizzes.models import Quiz


from .db_data import users, quizzes


async def create_db_and_tables():
    init_all_models()

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)

        # if users:
        #     await conn.execute(insert(User), users)

        # if quizzes:
        #     await conn.execute(insert(Quiz), quizzes)

