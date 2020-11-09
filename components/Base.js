import React, { forwardRef } from 'react'
import styled from 'styled-components'
import css, { get } from '@styled-system/css'
import {
    system,
    compose,
    space,
    color,
    typography,
    layout,
    flexbox,
    grid,
    background,
    border,
    position,
    shadow,
} from 'styled-system'

// Next Link
import { default as NextLink } from 'next/link'

// Next Image
import { default as NextImage } from 'next/image'

const base = props => css(props.__css)
const sx = props => css(props.sx)
const variant = ({ theme, variant, tx = 'general' }) =>
    css(get(theme, 'variants.' + tx + '.' + variant))(theme)

export const Box = styled.div(
    base,
    variant,
    sx,
    props => props.css,
    system({
        textTransform: true,
        textDecoration: true,
        transform: true,
        transition: true,
        visibility: true,
        pointerEvent: true,
        objectFit: true,
        float: true,
    }),
    compose(
        space,
        color,
        typography,
        layout,
        flexbox,
        grid,
        background,
        border,
        position,
        shadow
    )
)


// Next
export const Link = forwardRef(
    ({ href, as, prefetch, replace, scroll, shallow, ...props }, ref) =>
        href && (href.startsWith('/') || href.startsWith('#')) ? (
            <NextLink
                href={href}
                as={as}
                prefetch={prefetch}
                replace={replace}
                scroll={scroll}
                shallow={shallow}
                passHref={true}
            >
                <Box ref={ref} as="a" tx="links" {...props} />
            </NextLink>
        ) : (
            <Box
                ref={ref}
                as="a"
                href={href}
                rel="nofollow noopener"
                tx="links"
                {...props}
            />
        )
)


export const Image = forwardRef(({ ratio = 4 / 3, width, ...props }, ref) => (
    <Box
        ref={ref}
        as={NextImage}
        alt=""
        width={width}
        height={width / ratio}
        {...props}
    />
))

export const AspectRatio = forwardRef(
    ({ ratio = 4 / 3, children, ...props }, ref) => {
        return (
            <Box
                ref={ref}
                __css={{
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    paddingBottom={
                        ratio
                            ? typeof ratio === 'number'
                                ? `${100 / ratio}%`
                                : Object.keys(ratio).reduce((acc, key) => {
                                      return {
                                          ...acc,
                                          [key]: `${100 / ratio[key]}%`,
                                      }
                                  }, {})
                            : null
                    }
                    __css={{
                        width: '100%',
                        height: 0,
                    }}
                />
                <Box
                    {...props}
                    __css={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    }}
                >
                    {children}
                </Box>
            </Box>
        )
    }
)

export const AspectImage = forwardRef(({ ratio, ...props }, ref) => (
    <AspectRatio ratio={ratio}>
        <Image
            ref={ref}
            {...props}
            __css={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
            }}
        />
    </AspectRatio>
))


