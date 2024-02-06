from fastapi import Depends
from fastapi_users.db import SQLAlchemyUserDatabase


from app.database import AbstractAsyncSession
from .models import User




async def get_user_db(session: AbstractAsyncSession = Depends()):
    yield SQLAlchemyUserDatabase(session, User)


