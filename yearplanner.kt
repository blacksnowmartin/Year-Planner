import java.text.SimpleDateFormat
import java.util.*

data class Goal(val goal: String, val deadline: Date)

class GoalPlanner {
    private val goals = mutableListOf<Goal>()
    private val dateFormat = SimpleDateFormat("yyyy-MM-dd", Locale.US)

    fun addGoal(goal: String, deadline: String) {
        try {
            val deadlineDate = dateFormat.parse(deadline)
            goals.add(Goal(goal, deadlineDate))
            println("Goal added successfully!")
        } catch (e: Exception) {
            println("Invalid date format. Please use YYYY-MM-DD.")
        }
    }

    fun displayGoals() {
        println("\nYour Yearly Goals:")
        goals.forEachIndexed { index, goal ->
            println("${index + 1}. Goal: ${goal.goal}, Deadline: ${dateFormat.format(goal.deadline)}")
        }
    }

    fun runPlanner() {
        println("Welcome to the Yearly Goal Planner!")
        while (true) {
            println("\nChoose an option:")
            println("1. Add Goal")
            println("2. Display Goals")
            println("3. Exit")
            print("Enter your choice (1/2/3): ")

            when (readLine()) {
                "1" -> {
                    print("Enter your goal: ")
                    val goal = readLine() ?: ""
                    print("Enter the deadline (YYYY-MM-DD): ")
                    val deadline = readLine() ?: ""
                    addGoal(goal, deadline)
                }
                "2" -> displayGoals()
                "3" -> {
                    println("Exiting Yearly Goal Planner. Have a great year ahead!")
                    break
                }
                else -> println("Invalid choice. Please enter 1, 2, or 3.")
            }
        }
    }
}

fun main() {
    val planner = GoalPlanner()
    planner.runPlanner()
}
