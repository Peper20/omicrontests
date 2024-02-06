from fastapi import Depends, APIRouter


from .models import User
from .schemas import UserCreate, UserRead, UserUpdate
from .auth import auth_backend, current_active_user, fastapi_users



auth_router = APIRouter(
    prefix='/auth',
    tags=['auth'],
)
users_router = APIRouter(
    prefix='/users',
    tags=["users"],

)

auth_router.include_router(
    fastapi_users.get_auth_router(auth_backend),
)
auth_router.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
)
auth_router.include_router(
    fastapi_users.get_reset_password_router(),
)
auth_router.include_router(
    fastapi_users.get_verify_router(UserRead),
)
users_router.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
)

router = APIRouter()
router.include_router(auth_router)
router.include_router(users_router)

