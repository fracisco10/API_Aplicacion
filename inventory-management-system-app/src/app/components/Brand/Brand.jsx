import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx'
import React from 'react'
import useSettings from '../../hooks/useSettings'

const useStyles = makeStyles(({ palette, ...theme }) => ({
    brand: {
        padding: '20px 18px 20px 29px',
    },
    hideOnCompact: {
        display: 'none',
    },
}))

const Brand = ({ children }) => {
    const classes = useStyles()
    const { settings } = useSettings()
    const leftSidebar = settings.layout1Settings.leftSidebar
    const { mode } = leftSidebar

    return (
        <div
            className={clsx('flex items-center justify-between', classes.brand)}
        >
            <div className="flex items-center">
                {/* <MatxLogo />*/}
                <span
                    className={clsx({
                        'text-18 ml-2 font-medium sidenavHoverShow': true,
                        [classes.hideOnCompact]: mode === 'compact',
                    })}
                >
                    {/*Matx*/}
                    Inventory
                </span>
            </div>
            <div
                className={clsx({
                    sidenavHoverShow: true,
                    [classes.hideOnCompact]: mode === 'compact',
                })}
            >
                {children || null}
            </div>
        </div>
    )
}

export default Brand
