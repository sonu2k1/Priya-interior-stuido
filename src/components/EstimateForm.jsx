import { useState } from 'react';
import './EstimateForm.css';

const STEPS = [
  {
    id: 'property',
    label: 'Your Property Type',
    options: ['2BHK or 3BHK', '4BHK / Duplex', 'Villa / Bungalow'],
  },
  {
    id: 'budget',
    label: 'Budget',
    options: ['Up to 10 Lakhs', '10-20 Lakhs', '20-25 Lakhs', '25 Lakhs or above'],
  },
  {
    id: 'contact',
    label: 'Your Details',
    fields: ['name', 'phone', 'email'],
  },
];

const EstimateForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    property: '',
    budget: '',
    name: '',
    phone: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = STEPS.length;
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleOptionSelect = (stepId, value) => {
    setFormData({ ...formData, [stepId]: value });
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const canProceed = () => {
    const step = STEPS[currentStep];
    if (step.id === 'property') return formData.property !== '';
    if (step.id === 'budget') return formData.budget !== '';
    if (step.id === 'contact') return formData.name !== '' && formData.phone !== '';
    return false;
  };

  if (submitted) {
    return (
      <div className="estimate-form" id="estimate-form">
        <div className="estimate-form__success">
          <div className="estimate-form__success-icon">✓</div>
          <h3>Thank You!</h3>
          <p>We've received your request. Our design expert will contact you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="estimate-form" id="estimate-form">
      <h2 className="estimate-form__title">Get Free Price Estimate</h2>

      {/* Progress Bar */}
      <div className="estimate-form__progress">
        <span className="estimate-form__progress-label">{Math.round(progress)}%</span>
        <div className="estimate-form__progress-bar">
          <div
            className="estimate-form__progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Property Type */}
        {currentStep === 0 && (
          <div className="estimate-form__step" key="property">
            <label className="estimate-form__label">
              {STEPS[0].label} <span className="estimate-form__required">*</span>
            </label>
            <div className="estimate-form__options">
              {STEPS[0].options.map((option) => (
                <label
                  key={option}
                  className={`estimate-form__radio ${formData.property === option ? 'estimate-form__radio--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="property"
                    value={option}
                    checked={formData.property === option}
                    onChange={() => handleOptionSelect('property', option)}
                  />
                  <span className="estimate-form__radio-custom" />
                  <span className="estimate-form__radio-label">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Budget */}
        {currentStep === 1 && (
          <div className="estimate-form__step" key="budget">
            <label className="estimate-form__label">
              {STEPS[1].label} <span className="estimate-form__required">*</span>
            </label>
            <div className="estimate-form__options estimate-form__options--grid">
              {STEPS[1].options.map((option) => (
                <label
                  key={option}
                  className={`estimate-form__radio ${formData.budget === option ? 'estimate-form__radio--selected' : ''}`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={option}
                    checked={formData.budget === option}
                    onChange={() => handleOptionSelect('budget', option)}
                  />
                  <span className="estimate-form__radio-custom" />
                  <span className="estimate-form__radio-label">{option}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {currentStep === 2 && (
          <div className="estimate-form__step" key="contact">
            <label className="estimate-form__label">
              {STEPS[2].label} <span className="estimate-form__required">*</span>
            </label>
            <div className="estimate-form__fields">
              <input
                type="text"
                className="estimate-form__input"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                id="form-name-input"
              />
              <input
                type="tel"
                className="estimate-form__input"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                id="form-phone-input"
              />
              <input
                type="email"
                className="estimate-form__input"
                placeholder="Email (Optional)"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                id="form-email-input"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="estimate-form__nav">
          {currentStep > 0 && (
            <button
              type="button"
              className="estimate-form__back"
              onClick={handleBack}
              id="form-back-btn"
            >
              ← Back
            </button>
          )}
          {currentStep < totalSteps - 1 ? (
            <button
              type="button"
              className={`estimate-form__submit ${!canProceed() ? 'estimate-form__submit--disabled' : ''}`}
              onClick={handleNext}
              disabled={!canProceed()}
              id="form-next-btn"
            >
              Next →
            </button>
          ) : (
            <button
              type="submit"
              className={`estimate-form__submit ${!canProceed() ? 'estimate-form__submit--disabled' : ''}`}
              disabled={!canProceed()}
              id="form-submit-btn"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default EstimateForm;
