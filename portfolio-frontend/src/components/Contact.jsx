import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Snackbar,
  Alert,
  Fade,
} from "@mui/material";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setOpen(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        const data = await response.json();
        alert("Error: " + data.error);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  const handleClose = (_, reason) => {
    if (reason === "clickaway") return;
    setOpen(false);
  };

  return (
    <section
      id="contact"
      style={{ paddingTop: 0, paddingBottom: "4rem", marginTop: 0 }}
    >
      <Fade in timeout={1800}>
        <Box sx={{ maxWidth: 900, mx: "auto", textAlign: "left", mt: 0 }}>
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 3, lineHeight: 1.2 }}
          >
            Contact Me
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              name="name"
              value={form.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              required
            />
            <TextField
              label="Message"
              name="message"
              value={form.message}
              onChange={handleChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
              required
            />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              startIcon={<FaPaperPlane color="#fff" />}
              sx={{
                mt: 2,
                color: "#fff",
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Send Message
            </Button>
          </form>

          <Snackbar open={open} autoHideDuration={4000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Message sent successfully!
            </Alert>
          </Snackbar>

          <Box sx={{ mt: 6 }}>
            <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
              My Location
            </Typography>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448180.01538574676!2d76.76357918831255!3d28.64428734924117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd7e3e6c2a0d%3A0x9bfe8b4b5b6f327!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1717425987607!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            />
          </Box>
        </Box>
      </Fade>
    </section>
  );
};

export default Contact;
