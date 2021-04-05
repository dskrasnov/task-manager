import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  gridWrapper: {
    padding: theme.spacing(1),
  },
  appLoadingIndicator: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
