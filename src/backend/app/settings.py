from dataclasses import dataclass
from os import environ


from dotenv import load_dotenv; load_dotenv()



# crypto area {

@dataclass
class CryptoConfig:
    secret: str
    algorithm: str = 'HS256'


crypto_config = CryptoConfig(
    secret=environ.get('secret'),
)

# }


# db area {

@dataclass
class DbConfig:
    user: str
    password: str
    host: str
    name: str

    @property
    def url(self):
        return f'postgresql+asyncpg://{self.user}:{self.password}@{self.host}/{self.name}'

db_config=DbConfig(
    environ.get('user'),
    environ.get('password'),
    environ.get('host'),
    environ.get('name'),
)

# }
