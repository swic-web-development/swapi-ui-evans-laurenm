import Button from './Button.js'
import Label from './Label.js'
import Input from './Input.js'
import TextArea from './textarea.js'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: '',
      })
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.name) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.message) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = () => {
    if (validate()) {
      // Submit form data
      console.log('Form submitted:', formData)

      // Show success message
      setShowSuccess(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          message: '',
        })
        setShowSuccess(false)
      }, 3000)
    }
  }

  return (
    <div className="mx-auto max-w-md rounded-lg bg-white p-6 shadow-md">
      <h2 className="mb-6 text-xl font-bold">Contact Form</h2>

      {showSuccess && (
        <div className="mb-4 rounded bg-green-100 p-3 text-green-800">
          Form submitted successfully!
        </div>
      )}

      <div className="form-group">
        <Label htmlFor="name" required>
          Name
        </Label>
        <Input
          id="name"
          name="name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          errorMessage={errors.name}
        />
      </div>

      <div className="form-group">
        <Label htmlFor="email" required>
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          error={!!errors.email}
          errorMessage={errors.email}
        />
      </div>

      <div className="form-group">
        <Label htmlFor="message" required>
          Message
        </Label>
        <TextArea
          id="message"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
          error={!!errors.message}
          errorMessage={errors.message}
        />
      </div>

      <div className="flex justify-end space-x-2">
        <Button
          variant="secondary"
          onClick={() => setFormData({ name: '', email: '', message: '' })}
        >
          Reset
        </Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  )
}

export default ContactForm
