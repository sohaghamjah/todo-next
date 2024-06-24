import { toast, ToastOptions } from 'react-toastify';

type ToastType = 'success' | 'error';

/**
 * Custom Toaster
 * @param type ToastType
 * @param message string
 * @param autoClose number
 * @param className string
 * @returns void
 */
export const Toaster = (type: ToastType = 'success', message: string, autoClose = 3000, className = "primaryColor"): void => {
    const options: ToastOptions = {
        autoClose,
        className,
        position: "top-right",
    };
    if (type === 'success') {
        toast.success(message, options);
    } else if (type === 'error') {
        toast.error(message, options);
    }
};
