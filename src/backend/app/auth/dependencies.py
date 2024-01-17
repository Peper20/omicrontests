from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase


from app.database import get_async_session, AsyncSession
from .models import User




async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)


