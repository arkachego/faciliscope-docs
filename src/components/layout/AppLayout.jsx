import React from 'react'
import { Layout } from 'antd'
import Logo from '../Logo'

const { Header, Content, Footer } = Layout

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f7fa' }}>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          background: '#001529',
          borderBottom: '1px solid rgba(255, 255, 255, 0.12)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Logo orientation="horizontal" size="small" variant="dark" />
          <span
            style={{
              color: 'rgba(255,255,255,0.85)',
              fontSize: 14,
              opacity: 0.85
            }}
          >
            Documentation
          </span>
        </div>
      </Header>

      <Content
        style={{
          padding: '24px 24px 32px',
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%'
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: 'center',
          background: 'transparent',
          color: 'rgba(0,0,0,0.45)',
          paddingTop: 16
        }}
      >
        FaciliScope Docs © {new Date().getFullYear()}
      </Footer>
    </Layout>
  )
}

export default AppLayout


