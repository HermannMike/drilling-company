// Using React from CDN (global React and ReactDOM) version 19
const { useState, useEffect } = React;

// React component for contact form
function ContactForm() {
  const [formData, setFormData] = useState({
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
        setFormData({ email: '', message: '' });
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
    React.createElement('h2', null, i18n.t('modals.contact.title')),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: i18n.t('modals.contact.email'),
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('textarea', {
        name: 'message',
        placeholder: i18n.t('modals.contact.message'),
        value: formData.message,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, i18n.t('modals.contact.submit'))
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
    React.createElement('h2', null, i18n.t('modals.login.title')),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: i18n.t('modals.login.email'),
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'password',
        name: 'password',
        placeholder: i18n.t('modals.login.password'),
        value: formData.password,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, i18n.t('modals.login.submit'))
    )
  );
}

// React component for signup form
function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    idNumber: '',
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
        setFormData({ firstName: '', idNumber: '', email: '', password: '' });
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
    React.createElement('h2', null, i18n.t('modals.signup.title')),
    React.createElement('form', { onSubmit: handleSubmit, method: 'post' },
      React.createElement('input', {
        type: 'text',
        name: 'firstName',
        placeholder: i18n.t('modals.signup.name'),
        value: formData.firstName,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'text',
        name: 'idNumber',
        placeholder: i18n.t('modals.signup.idNumber'),
        value: formData.idNumber,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'email',
        name: 'email',
        placeholder: i18n.t('modals.signup.email'),
        value: formData.email,
        onChange: handleChange,
        required: true
      }),
      React.createElement('input', {
        type: 'password',
        name: 'password',
        placeholder: 'Password',
        value: formData.password,
        onChange: handleChange,
        required: true
      }),
      React.createElement('button', { type: 'submit' }, i18n.t('modals.signup.submit'))
    )
  );
}




