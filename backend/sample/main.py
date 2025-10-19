from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import numpy as np

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # for development
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ProcessInput(BaseModel):
    temperature: float
    caustic: float
    flow_rate: float
    bauxite_feed: float
    moisture: float

@app.post("/simulate/")
def simulate_process(data: ProcessInput):
    temp = data.temperature
    caustic = data.caustic
    flow = data.flow_rate
    bauxite = data.bauxite_feed
    moisture = data.moisture

    opt_temp = 140
    opt_caustic = 180
    temp_factor = np.exp(-((temp - opt_temp) ** 2) / (2 * 20 ** 2))
    caustic_factor = np.exp(-((caustic - opt_caustic) ** 2) / (2 * 40 ** 2))
    flow_factor = 1 / flow

    alumina_output = bauxite * 0.4 * temp_factor * caustic_factor * flow_factor
    red_mud = bauxite * (0.6 * (1 - temp_factor * 0.9)) * flow

    reward = alumina_output - (0.8 * red_mud)

    return {
        "alumina_output": round(float(alumina_output), 2),
        "red_mud": round(float(red_mud), 2),
        "reward": round(float(reward), 2)
    }

# # # To run: uvicorn main:app --reload


# from fastapi import FastAPI
# from pydantic import BaseModel
# import random

# app = FastAPI()

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # for development
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# # # Input model
# # class InputData(BaseModel):
# #     bauxite: float
# #     soda: float
# #     temperature: float

# # @app.post("/feedback/")
# # def process_extraction(data: InputData):
# #     # Simulate aluminum extraction process
# #     aluminum_yield = (data.bauxite * 0.4) - (data.temperature * 0.01) + (data.soda * 0.1)
# #     waste = data.bauxite - aluminum_yield

# #     # Add random improvement suggestion (like feedback)
# #     suggestions = [
# #         "Try increasing temperature slightly.",
# #         "Reduce soda usage to lower red mud waste.",
# #         "Increase bauxite purity for better yield.",
# #         "Current settings are near optimal!"
# #     ]
# #     feedback = random.choice(suggestions)

# #     return {
# #         "aluminum_yield": round(aluminum_yield, 2),
# #         "waste": round(waste, 2),
# #         "feedback": feedback
# # )




# from fastapi import FastAPI
# from pydantic import BaseModel
# from fastapi.middleware.cors import CORSMiddleware
# import random

# app = FastAPI()

# # Allow React to talk to backend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # for development
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class InputData(BaseModel):
#     bauxite: float
#     soda: float
#     temperature: float

# @app.post("/feedback/")  # <-- This defines the URL
# def process_extraction(data: InputData):
#     aluminum_yield = (data.bauxite * 0.4) - (data.temperature * 0.01) + (data.soda * 0.1)
#     waste = data.bauxite - aluminum_yield
#     feedback = random.choice([
#         "Try increasing temperature slightly.",
#         "Reduce soda usage to lower red mud waste.",
#         "Increase bauxite purity for better yield.",
#         "Current settings are near optimal!"
#     ])
#     return {
#         "aluminum_yield": round(aluminum_yield, 2),
#         "waste": round(waste, 2),
#         "feedback": feedback
#     }
