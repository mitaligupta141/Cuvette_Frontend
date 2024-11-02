const formatDate = (date = Date.now()) => {
  const newDate = new Date(date);
  
  const options = {
    day: 'numeric',
    month: 'short',
    year: "numeric"  
  };
  
 
  const formattedDate = new Intl.DateTimeFormat('en-GB', options).format(newDate);

  return {
      date: formattedDate,
  };
};

export default formatDate;