from typing import Iterable, Any


def _convert(map_: Iterable[str], data: Iterable[Iterable[Any]]) -> list[dict]:
    return list(map(
        lambda x: dict(zip(map_, x)),
        data
    ))


users = _convert(
    ('id', 'email', 'hashed_password', 'is_active', 'is_superuser', 'is_verified'),
    [
        ('d2a28694-67b1-4179-b19f-0e45b7a2f028', 'ivan.baluk@bk.ru', r'$2b$12$./u4YPsNlU3gTkvlKRFFkeLOewnd3TZCxnBJw0garmRg12HJVcAdK', True, False, False),
    ],
)
quizzes = [

]

