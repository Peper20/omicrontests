from datetime import datetime
from uuid import UUID
from pydantic import BaseModel




class QuizAddDTO(BaseModel):
    title: str


class QuizPreviewDTO(BaseModel):
    id: int
    title: str
    user_id: UUID
    created_at: datetime


class QuizDTO(BaseModel):
    pass


