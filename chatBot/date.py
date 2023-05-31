from datetime import datetime
from pymongo import MongoClient


class Check():
    def __init__(self, check):
        self.check = check


def get_reservations_for_room(room_type):
    # Connect to MongoDB
    client = MongoClient("mongodb+srv://rifaiiaya202:Ayarifaii@cluster0.edtrdfl.mongodb.net/test")
    db = client["hotel"]
    collection = db["book"]

    # Query MongoDB for reservations of the room
    reservations = collection.find({
        "typeofchl": room_type
    })

    return list(reservations)


def is_room_available(room_type, check_in_date, check_out_date) -> Check:
    # Get all reservations for the room
    reservations = get_reservations_for_room(room_type)

    # Convert input dates to datetime objects
    check_in_date = datetime.strptime(check_in_date, "%Y-%m-%d")
    check_out_date = datetime.strptime(check_out_date, "%Y-%m-%d")

    # Assume the room is not available unless a reservation does not overlap with the specified date range
    is_available = False

    # Check if the room is available on the specified date range
    for reservation in reservations:
        date_in = reservation["dateIn"]
        date_out = reservation["dateOut"]

        if (check_in_date <= date_in <= check_out_date) or (check_in_date <= date_out <= check_out_date) or (
                date_in <= check_in_date <= date_out) or (date_in <= check_out_date <= date_out):
            is_available = True
            break

    if is_available:
        return Check("Room {room_type} is not available for the specified date range.")
    else:
        return Check("Room {room_type} is available for the specified date range.")
