# backend/db.py
#from sqlalchemy import create_engine, Column, Integer, String, Float
#from sqlalchemy.ext.declarative import declarative_base
#
#Base = declarative_base()
#
#class FoodLog(Base):
#    __tablename__ = "food_logs"
#    id = Column(Integer, primary_key=True)
#    name = Column(String)
#    protein = Column(Float)
#    carbs = Column(Float)
#    fats = Column(Float)
#
## Conexión a SQLite
#engine = create_engine("sqlite:///nutri.db")
#Base.metadata.create_all(engine)