export const getStateColor = (state: string) => {
    switch (state) {
      case 'success':
        return '#43A047';
      case 'info':
        return '#E8F0FE';
      case 'error':
        return '#E53935';
      case 'warning':
        return '#F9A825';
      case 'neutral-800':
        return '#424242';
      case 'primary-900':
        return '#01579B';
      default:
        return `${state}`;
    }
  }
  