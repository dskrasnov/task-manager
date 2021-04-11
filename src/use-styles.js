import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  grid: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  gridWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  taskPagination: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  appLoadingIndicator: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

export default useStyles;
