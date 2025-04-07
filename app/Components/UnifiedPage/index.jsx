import React from 'react';
import { Box, Typography, Button, Container, useTheme, useMediaQuery } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const UnifiedPage = () => {

    return (
        <Box
            sx={{
                position: 'relative',
                padding: { xs: '20px', sm: '25px', md: '30px' },
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                overflow: 'hidden',
                fontFamily: 'Montserrat, sans-serif'
            }}
        >
            {/* Background Image */}
            <Box
                component="img"
                src="/unified/Unified Bg Img.png"
                alt="Background"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0
                }}
            />

            <Box
                component="img"
                src="/unified/Section Shadow.svg"
                alt="Section Shadow"
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: 'auto',
                    objectFit: 'contain',
                    objectPosition: 'top',
                    zIndex: 1,
                    pointerEvents: 'none'
                }}
            />

            {/* Mask Group SVG Overlay */}
            <Box
                component="img"
                src="/unified/Mask group.svg"
                alt="Mask Overlay"
                sx={{
                    position: 'absolute',
                    top: '-60px',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: 0.5,
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1, margin: 0 }}>
                {/* Headline Section */}
                <Box sx={{
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
                    mb: { xs: 1, sm: 2 }
                }}>
                    <Typography
                        variant="h2"
                        component="h1"
                        sx={{
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            color: 'white',
                            lineHeight: 1.2,
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.8rem' },
                            fontFamily: 'Montserrat, sans-serif'
                        }}
                    >
                        UNIFY <span style={{
                            background: 'linear-gradient(135deg, #4a0c7c 0%, #7715c0 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            display: 'inline-block'
                        }}>ANY PLATFORM</span> SEAMLESSLY
                    </Typography>
                </Box>

                {/* Sub-heading */}
                <Typography
                    variant="h6"
                    component="h2"
                    sx={{
                        fontSize: { xs: '14px', sm: '16px', md: '18px' },
                        color: 'white',
                        mb: 1,
                        maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '60%' },
                        fontFamily: 'Montserrat, sans-serif'
                    }}
                >
                    Sub-Heading
                </Typography>

                {/* Text Sections */}
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        mb: { md: 1 },
                        maxWidth: { xs: '90%', sm: '80%', md: '70%', lg: '55%' },
                        gap: { xs: 2, sm: 0 }
                    }}
                >
                    <Box sx={{ width: { xs: '100%', sm: '50%' }, pr: { xs: 0, sm: 2 } }}>
                        <Typography sx={{
                            fontSize: '12px',
                            color: 'grey',
                            wordWrap: 'break-word',
                            fontFamily: 'Montserrat, sans-serif'
                        }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                        </Typography>
                    </Box>
                    <Box sx={{ width: { xs: '100%', sm: '50%' }, pl: { xs: 0, sm: 2 } }}>
                        <Typography sx={{
                            fontSize: '12px',
                            color: 'grey',
                            wordWrap: 'break-word',
                            fontFamily: 'Montserrat, sans-serif'
                        }}>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui.
                        </Typography>
                    </Box>
                </Box>

                {/* Feature Buttons */}
                <Box
                    sx={{
                        backgroundImage: 'url(/unified/Baseplate.svg)',
                        backgroundSize: { xs: '250% 250%', sm: '220% 220%', md: '200% 200%' },
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        borderRadius: '10px',
                        padding: '6px 10px',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        gap: { xs: 2, sm: 3, md: 4 },
                        mb: { xs: 3, sm: 2, md: 1 },
                        maxWidth: 'fit-content',
                        justifyContent: 'space-around',
                        alignItems: 'center'
                    }}
                >
                    {/* Unify Button */}
                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: { xs: '6px 10px', md: '8px 12px' },
                            width: { xs: '180px', sm: 'auto' },
                            borderRadius: '6px',
                            color: '#80FF91',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 0 10px 2px rgba(128, 255, 145, 0.3)',
                            textTransform: 'none',
                            fontFamily: 'Montserrat, sans-serif',
                            '&:hover': {
                                backgroundColor: 'rgba(128, 255, 145, 0.05)',
                                boxShadow: '0 0 15px 5px rgba(128, 255, 145, 0.5)',
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src="/unified/Unify Icon.svg"
                            alt="Unify Icon"
                            sx={{
                                width: { xs: 16, md: 20 },
                                height: { xs: 16, md: 20 },
                                marginRight: 3,
                                border: '1px solid #80FF91',
                                borderRadius: '1px',
                                padding: '2px'
                            }}
                        />
                        <Typography sx={{
                            fontWeight: 'medium',
                            marginRight: 3,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: { xs: '13px', md: '14px' }
                        }}>UNIFY</Typography>
                        <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
                    </Button>

                    {/* Automate Button */}
                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: { xs: '6px 10px', md: '8px 12px' },
                            width: { xs: '180px', sm: 'auto' },
                            borderRadius: '6px',
                            color: '#C57AFF',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 0 10px 2px rgba(197, 122, 255, 0.3)',
                            textTransform: 'none',
                            fontFamily: 'Montserrat, sans-serif',
                            '&:hover': {
                                backgroundColor: 'rgba(197, 122, 255, 0.05)',
                                boxShadow: '0 0 15px 5px rgba(197, 122, 255, 0.3)',
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src="/unified/Robot.svg"
                            alt="Automate Icon"
                            sx={{
                                width: { xs: 16, md: 20 },
                                height: { xs: 16, md: 20 },
                                marginRight: 3,
                                border: '1px solid #C57AFF',
                                borderRadius: '1px',
                                padding: '2px'
                            }}
                        />
                        <Typography sx={{
                            fontWeight: 'medium',
                            marginRight: 3,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: { xs: '13px', md: '14px' }
                        }}>AUTOMATE</Typography>
                        <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
                    </Button>

                    {/* Scale Button */}
                    <Button
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            padding: { xs: '6px 10px', md: '8px 12px' },
                            width: { xs: '180px', sm: 'auto' },
                            borderRadius: '6px',
                            color: '#9CCAFF',
                            backgroundColor: 'transparent',
                            cursor: 'pointer',
                            transition: 'all 0.3s',
                            boxShadow: '0 0 10px 2px rgba(156, 202, 255, 0.3)',
                            textTransform: 'none',
                            fontFamily: 'Montserrat, sans-serif',
                            '&:hover': {
                                backgroundColor: 'rgba(156, 202, 255, 0.05)',
                                boxShadow: '0 0 15px 5px rgba(156, 202, 255, 0.3)',
                            }
                        }}
                    >
                        <Box
                            component="img"
                            src="/unified/Scale.svg"
                            alt="Scale Icon"
                            sx={{
                                width: { xs: 16, md: 20 },
                                height: { xs: 16, md: 20 },
                                marginRight: 3,
                                border: '0.2px solid #9CCAFF',
                                borderRadius: '1px',
                                padding: '2px'
                            }}
                        />
                        <Typography sx={{
                            fontWeight: 'medium',
                            marginRight: 3,
                            fontFamily: 'Montserrat, sans-serif',
                            fontSize: { xs: '13px', md: '14px' }
                        }}>SCALE</Typography>
                        <ChevronRightIcon sx={{ fontSize: { xs: 18, md: 24 } }} />
                    </Button>
                </Box>

                {/* Dashboard Image */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: { xs: '100%', md: '100vw' },
                    overflow: 'hidden'
                }}>
                    <Box
                        component="img"
                        src="/unified/DashboardImage.svg"
                        alt="Dashboard"
                        sx={{
                            maxWidth: '90%',
                            height: 'auto',
                        }}
                    />
                </Box>
            </Container>
        </Box>
    );
};

export default UnifiedPage;