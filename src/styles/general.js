import colors from './colors';

export const formStyles = {
  label: {
    fontSize: 12,
    color: colors.light,
    marginTop: 5,
    marginBottom: 8,
  },

  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 45,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.light,
  },

  slider: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 60,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: colors.light,
  },
};

export const buttonStyles = {
  button: {
    marginBottom: 5,
    marginTop: 5,
    height: 45,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: colors.white,
  },
};
