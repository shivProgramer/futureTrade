import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEye, FaEyeSlash, FaLock, FaCheckCircle, FaKey } from 'react-icons/fa';
import SideBarHeader from '../pages/SideBarHeader';

function PasswordChange() {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  
  const [showPasswords, setShowPasswords] = useState({
    current: false,
    new: false,
    confirm: false
  });
  
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.currentPassword) {
      newErrors.currentPassword = 'Current password is required';
    }
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'New password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Password change submitted:', formData);
      setSuccess(true);
      setFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
      setTimeout(() => setSuccess(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.6
      }
    }
  };

  const inputContainerVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.8
    },
    show: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100
      }
    }
  };

  const headerVariants = {
    hidden: { y: -50, opacity: 0 },
    show: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  };

  const iconContainerVariants = {
    hidden: { scale: 0, rotate: -180 },
    show: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  return (
    <>
    <SideBarHeader />
    <motion.div
      className=" flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="max-w-xl w-full bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
      >
        <motion.div
          className="text-center mb-8"
          variants={headerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="inline-block"
            variants={iconContainerVariants}
          >
            <div className="relative">
              <div className="absolute -top-1 -right-1">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2 }}
                >
                  <FaKey className="text-blue-500 text-xl" />
                </motion.div>
              </div>
              <div className="p-4 bg-blue-100 rounded-full">
                <FaLock className="text-blue-600 text-3xl" />
              </div>
            </div>
          </motion.div>
          <motion.h2 
            className="text-3xl font-bold text-gray-800 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Change Password
          </motion.h2>
          <motion.p 
            className="text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Secure your account with a strong password
          </motion.p>
        </motion.div>

        <AnimatePresence>
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg flex items-center justify-center gap-2 shadow-inner"
            >
              <FaCheckCircle className="text-green-500" />
              <span className="font-medium">Password changed successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {['current', 'new', 'confirm'].map((field, index) => (
            <motion.div
              key={field}
              variants={inputContainerVariants}
              className="transform-gpu"
            >
              <motion.label 
                className="block text-sm font-medium text-gray-700 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 * index }}
              >
                {field.charAt(0).toUpperCase() + field.slice(1)} Password
              </motion.label>
              <div className="relative group">
                <motion.input
                  type={showPasswords[field] ? "text" : "password"}
                  name={`${field}Password`}
                  value={formData[`${field}Password`]}
                  onChange={handleChange}
                  className={`block w-full px-4 py-3 rounded-lg border ${
                    errors[`${field}Password`] ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200
                    group-hover:border-blue-400 bg-white/50 backdrop-blur-sm`}
                  placeholder={`Enter ${field} password`}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    delay: 0.3 * index,
                    type: "spring",
                    damping: 20
                  }}
                />
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => togglePasswordVisibility(field)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                >
                  {showPasswords[field] ? <FaEyeSlash /> : <FaEye />}
                </motion.button>
              </div>
              <AnimatePresence>
                {errors[`${field}Password`] && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-1 text-sm text-red-600"
                  >
                    {errors[`${field}Password`]}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.button
            type="submit"
            variants={inputContainerVariants}
            whileHover={{ scale: 1.02, boxShadow: "0 5px 15px rgba(0,0,0,0.1)" }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-medium
              hover:from-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
              focus:ring-offset-2 transition-all duration-200 shadow-lg"
          >
            Change Password
          </motion.button>
        </motion.form>
      </motion.div>
    </motion.div>
    </>
  );
}

export default PasswordChange;