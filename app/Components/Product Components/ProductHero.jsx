import { Box, Typography, Container } from '@mui/material';

const ProductHero = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          overflow: 'hidden',
          paddingTop: { xs: '2rem', sm: '2rem', md: '5rem' },
        }}
      >
        <Box
          component="img"
          src="/product-page/productHeroBack.jpeg"
          alt="Product Hero Background"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: 0,
          }}
        />
        
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: {
              xs: 'linear-gradient(180deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.85) 100%)',
              sm: 'linear-gradient(180deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.85) 100%)',
              md: 'linear-gradient(90deg, rgba(26, 0, 51, 0.3) 0%, rgba(26, 0, 51, 0.6) 50%, rgba(26, 0, 51, 0.85) 100%)',
            },
            zIndex: 1,
          }}
        />
        
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            width: '100%',
            display: 'flex',
            flexDirection: { xs: 'column-reverse', md: 'row' },
            justifyContent: 'center',
            alignItems: 'flex-start',
            paddingTop: { xs: '1rem', sm: '1rem', md: '2rem' },
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: '1400px',
              display: 'flex',
              flexDirection: { xs: 'column-reverse', md: 'row' },
              justifyContent: 'space-between',
              alignItems: { xs: 'center', md: 'center' },
              padding: { xs: '1rem', sm: '2rem', md: '3rem' },
              gap: '2rem',
            }}
          >
            <Box
              sx={{
                width: { xs: '100%', md: 'calc(55% - 1rem)' },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mb: { xs: '2rem', md: 0 },
                mt: { xs: 0, md: 0 },
              }}
            >
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '8px',
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '95%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src="/product-page/Demo_Vid 1.svg"
                  alt="Demo Video"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: { xs: '250px', sm: '350px', md: '450px', lg: '550px' },
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
            
            <Box
              sx={{
                width: { xs: '100%', md: 'calc(45% - 1rem)' },
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                height: { xs: 'auto', md: '100%' },
              }}
            >
              <Typography 
                variant="h1" 
                sx={{
                  alignSelf: 'stretch',
                  color: '#EEE',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '38px', sm: '48px', md: '58px', lg: '64px' },
                  fontWeight: 700,
                  lineHeight: '1',
                  marginBottom: '0.2rem',
                  textTransform: 'capitalize',
                  overflowWrap: 'break-word',
                }}
              >
                Force
              </Typography>
              
              <Typography 
                variant="h1" 
                sx={{
                  alignSelf: 'stretch',
                  background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '52px', sm: '68px', md: '80px', lg: '96px' },
                  fontWeight: 700,
                  lineHeight: '1',
                  marginBottom: { xs: '0.3rem', md: '0.5rem' },
                  paddingRight: '1rem',
                  textTransform: 'capitalize',
                  overflowWrap: 'break-word',
                }}
              >
                Multiplied
              </Typography>
              
              <Typography 
                variant="h2" 
                sx={{
                  alignSelf: 'stretch',
                  color: '#9BA5B7',
                  fontFamily: 'Montserrat',
                  fontSize: { xs: '20px', sm: '26px', md: '32px', lg: '36px' },
                  fontWeight: 700,
                  lineHeight: '1.1',
                  marginBottom: '0.5rem',
                  display: 'block',
                  overflowWrap: 'break-word',
                }}
              >
                With Real-Time Intelligence
              </Typography>
              
              <Box
                sx={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  padding: { xs: '10px', sm: '15px' },
                  marginTop: { xs: '0.75rem', md: '1rem' },
                  maxWidth: '100%',
                  borderRadius: '4px',
                }}
              >
                <Typography 
                  variant="body1" 
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                    lineHeight: '1.4',
                    textAlign: { xs: 'center', md: 'left' },
                  }}
                >
                  Discover how our platform redefines IT operations through advanced real-time insights and seamless integration. Experience unparalleled efficiency and adaptability in managing your infrastructure.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            minHeight: { xs: 'auto', md: '80vh' },
            zIndex: 2,
            mt: { xs: '0', md: '5rem' },
            pb: { xs: '1rem', md: '2rem' },
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(11, 11, 11, 0.62)',
              zIndex: 1,
            }}
          />
          
          <Box
            sx={{
              position: 'relative',
              zIndex: 2,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              padding: { xs: '2rem 1rem', sm: '3rem 2rem', md: '4rem 2rem' },
              paddingBottom: { xs: '1rem', sm: '1.5rem', md: '2rem' },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '1400px',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: { xs: 'center', md: 'center' },
                justifyContent: 'space-between',
                gap: '2rem',
              }}
            >
              <Box
                sx={{
                  width: { xs: '100%', md: 'calc(50% - 1rem)' },
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: { xs: 'flex-start', md: 'flex-start' },
                  textAlign: { xs: 'left', md: 'left' },
                  px: { xs: '1rem', md: 0 },
                }}
              >
                <Typography 
                  variant="h2" 
                  sx={{
                    alignSelf: 'stretch',
                    background: 'linear-gradient(90deg, #FFF 0%, #9747FF 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '38px', sm: '48px', md: '58px', lg: '64px' },
                    fontWeight: 700,
                    lineHeight: '1.1',
                    marginBottom: '0.2rem',
                    overflowWrap: 'break-word',
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                  }}
                >
                  Seamless Orchestration
                </Typography>
                
                <Typography 
                  variant="h3" 
                  sx={{
                    color: '#9BA5B7',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '20px', sm: '26px', md: '32px', lg: '36px' },
                    fontWeight: 700,
                    lineHeight: '1.2',
                    marginBottom: '1.5rem',
                    overflowWrap: 'break-word',
                    textAlign: { xs: 'center', md: 'left' },
                    width: '100%',
                  }}
                >
                  Across Any Environment
                </Typography>
                
                <Typography 
                  variant="body1" 
                  sx={{
                    color: '#D0D0D0',
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                    lineHeight: '1.5',
                    marginBottom: '2rem',
                    maxWidth: '100%',
                    textAlign: { xs: 'left', md: 'left' },
                  }}
                >
                  <Box component="span" sx={{ fontWeight: 'bold' }}>OpsZ</Box> is the system of intelligent agents that transforms your fragmented IT ecosystem into a synchronized, self-orchestrating operation—no matter how complex or distributed.
                </Typography>
                
                <Box sx={{ width: '100%' }}>
                  <Typography 
                    variant="h6" 
                    sx={{
                      color: '#FFF',
                      fontFamily: 'Montserrat',
                      fontSize: { xs: '16px', sm: '18px', md: '20px' },
                      fontWeight: 600,
                      marginBottom: '0.75rem',
                    }}
                  >
                    Plug into your existing:
                  </Typography>
                  
                  <Box
                    component="ul"
                    sx={{
                      listStyleType: 'disc',
                      pl: { xs: 4, md: 4 },
                      color: '#EAEAEA',
                      fontFamily: 'Montserrat',
                      fontSize: { xs: '14px', sm: '16px', md: '18px' },
                      fontWeight: 500,
                      '& li': {
                        marginBottom: { xs: '0.75rem', md: '0.5rem' },
                        paddingLeft: '0.25rem',
                        paddingRight: { xs: '0.5rem', md: 0 },
                      },
                      '& li::marker': {
                        color: '#A865FF',
                        fontSize: { xs: '1.3em', md: '1.2em' },
                        fontWeight: 'bold',
                      },
                    }}
                  >
                    <li>Automation tools (e.g., Terraform, Ansible)</li>
                    <li>Monitoring systems (e.g., Datadog, Prometheus)</li>
                    <li>Sources of truth (e.g., CMDBs, Inventory APIs, IAM platform)</li>
                  </Box>
                </Box>
              </Box>
              
              <Box
                sx={{
                  width: { xs: '100%', md: 'calc(50% - 1rem)' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  mr: { xs: 0, md: 0 }, 
                  px: { xs: '1rem', md: 0 },
                }}
              >
                <Box
                  component="img"
                  src="/product-page/Placeholder Image.svg"
                  alt="Seamless Orchestration"
                  sx={{
                    maxWidth: '100%',
                    maxHeight: { xs: '300px', sm: '350px', md: '450px', lg: '550px' },
                    objectFit: 'contain',
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductHero;