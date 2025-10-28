// Using React from CDN (global React and ReactDOM)
const { useState } = React;

// Simple React component for the contact form
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ name: '', email: '', message: '' });
        document.getElementById('contactModal').style.display = 'none';
      } else {
        alert(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return React.createElement('div', null,
    React.createElement('span', { className: 'close', onClick: () => { document.getElementById('contactModal').style.display = 'none'; } }, '×'),
    React.createElement('h2', null, 'Contact Us'),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'text',
        name: 'name',
        placeholder: 'Your Name',
        value: formData.name,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: 'Your Email',
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('textarea', {
        name: 'message',
        placeholder: 'Your Message',
        value: formData.message,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, 'Submit')
    )
  );
}

// React component for login form
function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ email: '', password: '' });
        document.getElementById('loginModal').style.display = 'none';
      } else {
        alert(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return React.createElement('div', null,
    React.createElement('span', { className: 'close', onClick: () => { document.getElementById('loginModal').style.display = 'none'; } }, '×'),
    React.createElement('h2', null, 'Login'),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: 'Your Email',
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'password',
        name: 'password',
        placeholder: 'Your Password',
        value: formData.password,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, 'Login')
    )
  );
}

// React component for signup form
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    idNumber: '',
    email: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        setFormData({ firstName: '', idNumber: '', email: '' });
        document.getElementById('signupModal').style.display = 'none';
      } else {
        alert(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return React.createElement('div', null,
    React.createElement('span', { className: 'close', onClick: () => { document.getElementById('signupModal').style.display = 'none'; } }, '×'),
    React.createElement('h2', null, 'Sign Up'),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'text',
        name: 'firstName',
        placeholder: 'First Name',
        value: formData.firstName,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'text',
        name: 'idNumber',
        placeholder: 'ID Number',
        value: formData.idNumber,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: 'Your Email',
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, 'Sign Up')
    )
  );
}

// Render the React components into the modals
const contactModalContent = document.getElementById('contactModal').querySelector('.modal-content');
const contactRoot = ReactDOM.createRoot(contactModalContent);
contactRoot.render(React.createElement(ContactForm));

const loginModalContent = document.getElementById('loginModal').querySelector('.modal-content');
const loginRoot = ReactDOM.createRoot(loginModalContent);
loginRoot.render(React.createElement(LoginForm));

const signupModalContent = document.getElementById('signupModal').querySelector('.modal-content');
const signupRoot = ReactDOM.createRoot(signupModalContent);
signupRoot.render(React.createElement(SignupForm));
