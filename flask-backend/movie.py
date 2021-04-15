class Movie():

    def __init__(self, title, notes, theater_number):
        self.title = title
        self.notes = notes
        self.theater_number = theater_number

def main():
    kong = Movie("Godzilla vs Kong", "Action movie with monsters", "4")

    print(kong.title)
    print(kong.notes)
    print(kong.theater_number)

main()