# React Form Handling

## React Controlled Form
    - Basic useState validation
    - small forms
    - wrost perfomance 
    - Create re-render issue
    - 🔹 Pros: More control, validation is easier.
    - 🔹 Cons: Can be slow for large forms.
    - We can validate input fields using useState and onBlur
    - Pros: No extra dependencies.
    - Cons: Can be hard to maintain for complex forms.
## React UnControlled Form
    - ref
    - Simpler Forms
    - Large form (better performance)
    - The input state is managed by the DOM itself using ref.
    - Pros: Faster, avoids unnecessary re-renders.
    - Cons: Harder to validate dynamically.
## React-Hook-Form
    - yup + react-hook-form (schema-based validation)
    - Performance & easy validation
    ✅ Automatically handles re-renders efficiently
    ✅ Simple & declarative validation
    ✅ Works well with uncontrolled inputs
    -  Better structure for complex validations
    ✅ Reusability with multiple forms
    - For complex forms, use yup for schema-based validation.
    ✅ Debounce Input Validation (lodash.debounce)
        -  Delays validation until typing stops.

        import { debounce } from 'lodash';
        const validateInput = debounce((value) => {
        console.log('Validating', value);
        }, 300);

## Multi-Step Form
    - Context API or Redux
    - For multi-step forms, store data in context or a global state (Recoil, Redux, etc.).

    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    - Use a step-wise switch to render different form parts.

✅ Step-by-step navigation
✅ Validation for each step using yup
✅ React Hook Form for easy form handling
✅ State management with useState
    - Uses yupResolver(validationSchemas[step])
    - Uses useState to track the current step
    - Uses trigger() to validate before proceeding
    - onSubmit only submits at the last step
- When Should You Use Redux/Context API for MultiStep form?
    - Large multi-step forms (e.g., 5+ steps)
        - Avoids losing data when navigating between steps
    - Forms with complex dependencies
        - Easily share state between steps without prop-drilling
    - Data needs to persist across routes/pages
        - Redux/Context allows data persistence across different routes
    - Multiple forms sharing the same state
        - Avoids duplicating logic and ensures consistency
    - If your form is simple, stick with useState. Small forms (2-3 steps)
    - For large applications, go with Redux. Large/Enterprise forms (5+ steps), High complexity & persistence
    - For moderate complexity, use Context API. Medium forms (3-5 steps), Need state across pages

## Form Elements
   - Input Box
   - Dropdown Select 
   - Multiple Choice
   - File Upload
   - Rating
   - Linear Scale
   - Password
   - Email
   - Button
   - TextArea
   - Date
   - Time
   - Address
   - Phone Number