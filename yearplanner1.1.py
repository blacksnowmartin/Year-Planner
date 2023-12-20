import datetime

class Goal:
    def __init__(self, description, deadline):
        self.description = description
        self.deadline = deadline

    def days_until_deadline(self):
        today = datetime.date.today()
        days_left = (self.deadline - today).days
        return max(days_left, 0)  # Ensure days left is not negative

class GoalPlanner:
    def __init__(self):
        self.goals = []

    def add_goal(self, description, deadline):
        goal = Goal(description, deadline)
        self.goals.append(goal)

    def display_goals(self):
        print("\nYour Yearly Goals:")
        for i, goal in enumerate(self.goals, start=1):
            days_left = goal.days_until_deadline()
            print(f"{i}. Goal: {goal.description}, Deadline: {goal.deadline}, Days Left: {days_left} days")

    def run_planner(self):
        print("Welcome to the Refined Yearly Goal Planner!")
        while True:
            print("\nChoose an option:")
            print("1. Add Goal")
            print("2. Display Goals")
            print("3. Exit")
            choice = input("Enter your choice (1/2/3): ")

            if choice == '1':
                goal_description = input("Enter your goal: ")
                deadline_str = input("Enter the deadline (YYYY-MM-DD): ")
                try:
                    deadline = datetime.datetime.strptime(deadline_str, "%Y-%m-%d").date()
                except ValueError:
                    print("Invalid date format. Please use YYYY-MM-DD.")
                    continue
                self.add_goal(goal_description, deadline)
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
