// Example: How to use the API from your onboarding form frontend

// Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// Function to submit onboarding form
async function submitOnboardingForm(formData) {
  try {
    const response = await fetch(`${API_BASE_URL}/users/submit-onboarding`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName: formData.firstName,
        lastName: formData.lastName,
        dateOfBirth: formData.dateOfBirth, // Format: YYYY-MM-DD
        gender: formData.gender
      })
    });

    const result = await response.json();

    if (result.success) {
      console.log('✅ User registered successfully:', result.data);
      alert('Onboarding completed successfully!');
      return result.data;
    } else {
      console.error('❌ Registration failed:', result.message);
      alert('Error: ' + result.message);
      return null;
    }
  } catch (error) {
    console.error('❌ Network error:', error);
    alert('Network error. Please try again.');
    return null;
  }
}

// Example usage
const exampleFormData = {
  firstName: 'John',
  lastName: 'Doe',
  dateOfBirth: '1990-05-15', // YYYY-MM-DD format
  gender: 'Male'
};

// Submit the form
// submitOnboardingForm(exampleFormData);

// HTML Form Example
const formHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Onboarding Form</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      max-width: 500px;
      margin: 50px auto;
      padding: 20px;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    input, select {
      padding: 10px;
      font-size: 16px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    button {
      padding: 10px 20px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-size: 16px;
    }
    button:hover {
      background-color: #0056b3;
    }
    label {
      font-weight: bold;
      margin-bottom: 5px;
    }
  </style>
</head>
<body>
  <h1>User Onboarding</h1>
  <form id="onboardingForm">
    <div>
      <label for="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" required>
    </div>

    <div>
      <label for="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" required>
    </div>

    <div>
      <label for="dateOfBirth">Date of Birth:</label>
      <input type="date" id="dateOfBirth" name="dateOfBirth" required>
    </div>

    <div>
      <label for="gender">Gender:</label>
      <select id="gender" name="gender" required>
        <option value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Other">Other</option>
      </select>
    </div>

    <button type="submit">Submit</button>
  </form>

  <script>
    document.getElementById('onboardingForm').addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        dateOfBirth: document.getElementById('dateOfBirth').value,
        gender: document.getElementById('gender').value
      };

      await submitOnboardingForm(formData);
    });

    async function submitOnboardingForm(formData) {
      try {
        const response = await fetch('http://localhost:5000/api/users/submit-onboarding', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (result.success) {
          alert('✅ Onboarding completed successfully!');
          document.getElementById('onboardingForm').reset();
        } else {
          alert('❌ Error: ' + result.message);
        }
      } catch (error) {
        alert('❌ Network error: ' + error.message);
      }
    }
  </script>
</body>
</html>
`;

// Export for use in other modules
export { submitOnboardingForm };
