import Api from "../api";

export const createContact = async (body) => {
  try {
    const response = await Api({
      method: "post",
      url: `/contact`,
      data: body,
    });
    return { data: response?.data, status: response?.status };
  } catch (error) {
    return {
      message: error?.response?.data?.message ?? error.message,
    };
  }
};

export const getAllContacts = async (body) => {
  try {
    const response = await Api({
      method: "get",
      url: `/contact`,
    });
    return { data: response?.data, status: response?.status };
  } catch (error) {
    return {
      message: error?.response?.data?.message ?? error.message,
    };
  }
};
