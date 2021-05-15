import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  gridAndWrapper: {
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  alertList: {
    paddingTop: theme.spacing(1),
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
  buttonLoadingIndicator: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -10,
    marginLeft: -10,
  },
}));

export default useStyles;
