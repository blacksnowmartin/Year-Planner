import datetime

class GoalPlanner:
    def __init__(self):
        self.goals = []

    def add_goal(self, goal, deadline):
        self.goals.append({"goal": goal, "deadline": deadline})

    def display_goals(self):
        print("\nYour Yearly Goals:")
        for i, goal in enumerate(self.goals, start=1):
            print(f"{i}. Goal: {goal['goal']}, Deadline: {goal['deadline']}")

    def run_planner(self):
        print("Welcome to the Yearly Goal Planner!")
        while True:
            print("\nChoose an option:")
            print("1. Add Goal")
            print("2. Display Goals")
            print("3. Exit")
            choice = input("Enter your choice (1/2/3): ")

            if choice == '1':
                goal = input("Enter your goal: ")
                deadline = input("Enter the deadline (YYYY-MM-DD): ")
                try:
                    deadline = datetime.datetime.strptime(deadline, "%Y-%m-%d").date()
                except ValueError:
                    print("Invalid date format. Please use YYYY-MM-DD.")
                    continue
                self.add_goal(goal, deadline)
                print("Goal added successfully!")

            elif choice == '2':
                self.display_goals()

            elif choice == '3':
                print("Exiting Yearly Goal Planner. Have a great year ahead!")
                break

            else:
                print("Invalid choice. Please enter 1, 2, or 3.")

if __name__ == "__main__":
    planner = GoalPlanner()
    planner.run_planner()
