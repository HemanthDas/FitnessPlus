export const checkOnce = async ({
  getIdToken,
}: {
  getIdToken: string | undefined;
}) => {
  const response = await fetch(
    import.meta.env.VITE_API_URL + "/users/check-once",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${getIdToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error during checkOnce");
  }
  return await response.json();
};
