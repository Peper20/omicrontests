from types import ModuleType


from app.settings import DEBUG
from . import (
    auth,
    quizzes,
    database,
)




features: list[ModuleType] = [
    auth,
    quizzes,
    database,
]

if DEBUG:
    import debug

    features.append(debug)

