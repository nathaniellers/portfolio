import React, { forwardRef, useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import Swal from 'sweetalert2';

const Contact = forwardRef((props, ref) => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Thanks for reaching out. I’ll get back to you soon!',
        });
        setForm({ name: '', email: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again later.',
      });
    }
  };

  return (
		<div ref={ref}>
			<Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 700, my: 'auto', textAlign:"left", p: 3 }}>
				<Typography variant="h4" my={5} sx={{ fontWeight:"bold", color:"#000"}}>
					Contact Me
				</Typography>

				<TextField
					label="Name"
					name="name"
					value={form.name}
					onChange={handleChange}
					fullWidth
					required
					margin="normal"
					error={!!errors.name}
					helperText={errors.name}
				/>
				<TextField
					label="Email"
					name="email"
					type="email"
					value={form.email}
					onChange={handleChange}
					fullWidth
					required
					margin="normal"
					error={!!errors.email}
					helperText={errors.email}
				/>
				<TextField
					label="Message"
					name="message"
					multiline
					rows={4}
					value={form.message}
					onChange={handleChange}
					fullWidth
					required
					margin="normal"
					error={!!errors.message}
					helperText={errors.message}
				/>

				<Button type="submit" variant="contained" sx={{ mt: 2 }}>
					Send Message
				</Button>
			</Box>
		</div>
  );
});

export default Contact;
