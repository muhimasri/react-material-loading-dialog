import { LinearProgress } from '@material-ui/core';
import MatDialog from '@material-ui/core/Dialog';

export const Dialog = ({loading, children, ...props}) => {
    return (
        <MatDialog {...props}>
            {loading ? <LinearProgress></LinearProgress> : null}
            {children}
        </MatDialog>
    )
}