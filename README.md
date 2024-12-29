# Assignment Submission: SOURAV KUMAR SHARMA

This is a React application with the following functionalities:

1. **Add, Edit, and Remove Bills:**
   - Manage bills locally by adding, editing, or removing them.

2. **Filter Bills by Category:**
   - Use a dropdown to filter bills based on their category.

3. **Visualize Monthly Billing Cycle:**
   - Display a time-series chart representing the monthly billing trends.

4. **Budget Analysis:**
   - Identify and highlight the minimum number of bills that can be paid within a specified monthly budget.

5. **Search Functionality:**
   - Implement a search bar to quickly find bills based on their descriptions or categories.

6. **Persistent Storage:**
   - Use local storage or a backend API to save and retrieve bills data.

7. **Responsive Design:**
   - Ensure the application is fully responsive and works seamlessly on devices of all sizes.

8. **Validation:**
   - Add form validation to ensure accurate data input for bills.

9. **Sorting Options:**
   - Allow users to sort bills by amount, date, or category.

10. **Dark Mode:**
    - Provide a dark mode toggle for better user experience in low-light environments.

## Input Parameters

The following input parameters are used in this application:

- **Bill Details:**
  - `description` (string): A short description of the bill (e.g., "Dominoes").
  - `category` (string): The category of the bill (e.g., "FoodNDining", "Utility").
  - `amount` (number): The monetary value of the bill (e.g., 430).
  - `date` (string): The date of the bill in "MM-DD-YYYY" format.

- **Filter Options:**
  - `category` (string): Category selected from the dropdown to filter bills.

- **Search Query:**
  - `query` (string): A keyword to search bills based on description or category.

- **Sorting Options:**
  - `sortBy` (string): Parameter to sort bills (e.g., "amount", "date", "category").

- **Budget Limit:**
  - `budget` (number): The monthly budget value to analyze bills.

- **Dark Mode Toggle:**
  - `isDarkMode` (boolean): A flag to enable or disable dark mode.

