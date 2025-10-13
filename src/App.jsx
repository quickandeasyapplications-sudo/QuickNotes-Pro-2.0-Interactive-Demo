import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield, 
  Wifi, 
  WifiOff, 
  Brain, 
  Lock, 
  Eye, 
  Network, 
  Zap, 
  FileText, 
  Search, 
  Database,
  Glasses,
  Users,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Globe,
  Server,
  Key,
  Activity
} from 'lucide-react'
import './App.css'

function App() {
  const [isOffline, setIsOffline] = useState(false)
  const [aiProcessing, setAiProcessing] = useState(false)
  const [securityLevel, setSecurityLevel] = useState('military-grade')
  const [activeDemo, setActiveDemo] = useState('overview')

  // Simulate AI processing
  const handleAIDemo = () => {
    setAiProcessing(true)
    setTimeout(() => setAiProcessing(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  QuickNotes Pro 2.0
                </h1>
                <p className="text-sm text-muted-foreground">Interactive Feature Demo</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={isOffline ? "destructive" : "default"} className="gap-1">
                {isOffline ? <WifiOff className="w-3 h-3" /> : <Wifi className="w-3 h-3" />}
                {isOffline ? 'Offline Mode' : 'Online Mode'}
              </Badge>
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => setIsOffline(!isOffline)}
              >
                Toggle Connection
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Experience the Future of Document Organization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Explore the revolutionary features of QuickNotes Pro 2.0 - the only offline-first document organizer 
            with AI capabilities, zero-knowledge privacy, and enterprise-grade security.
          </p>
        </div>

        {/* Key Features Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Brain className="w-8 h-8 text-blue-600 mb-2" />
              <CardTitle className="text-lg">Offline AI</CardTitle>
              <CardDescription>AI processing without internet</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Lock className="w-8 h-8 text-indigo-600 mb-2" />
              <CardTitle className="text-lg">Zero-Knowledge</CardTitle>
              <CardDescription>Complete data sovereignty</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Glasses className="w-8 h-8 text-purple-600 mb-2" />
              <CardTitle className="text-lg">AR/VR Ready</CardTitle>
              <CardDescription>Cross-reality integration</CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader>
              <Shield className="w-8 h-8 text-green-600 mb-2" />
              <CardTitle className="text-lg">Enterprise Security</CardTitle>
              <CardDescription>Military-grade encryption</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Interactive Demo Tabs */}
        <Tabs value={activeDemo} onValueChange={setActiveDemo} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 h-auto gap-2">
            <TabsTrigger value="overview" className="gap-2">
              <Eye className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="offline" className="gap-2">
              <WifiOff className="w-4 h-4" />
              Offline Mode
            </TabsTrigger>
            <TabsTrigger value="ai" className="gap-2">
              <Brain className="w-4 h-4" />
              AI Features
            </TabsTrigger>
            <TabsTrigger value="security" className="gap-2">
              <Shield className="w-4 h-4" />
              Security
            </TabsTrigger>
            <TabsTrigger value="advanced" className="gap-2">
              <Sparkles className="w-4 h-4" />
              Advanced
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  QuickNotes Pro 2.0 Overview
                </CardTitle>
                <CardDescription>
                  A comprehensive offline-first document organizer with enterprise-grade features
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Core Capabilities
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Offline-first architecture with Electron & SQLite</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Cross-platform desktop support (Windows, macOS, Linux)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Local data storage with AES-256-GCM encryption</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-600">•</span>
                        <span>Real-time collaboration via WebSocket</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Unique Advantages
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">•</span>
                        <span>Only solution with offline AI processing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">•</span>
                        <span>Zero-knowledge privacy architecture</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">•</span>
                        <span>First-mover in AR/VR document organization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-indigo-600">•</span>
                        <span>One-time purchase vs. subscription model</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Compliance & Standards</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">GDPR</Badge>
                    <Badge variant="secondary">HIPAA</Badge>
                    <Badge variant="secondary">SOX</Badge>
                    <Badge variant="secondary">ISO 27001</Badge>
                    <Badge variant="secondary">AES-256-GCM</Badge>
                    <Badge variant="secondary">PBKDF2</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Offline Mode Tab */}
          <TabsContent value="offline" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <WifiOff className="w-5 h-5" />
                  Offline-First Architecture
                </CardTitle>
                <CardDescription>
                  Full functionality without internet connection
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`p-4 rounded-lg border-2 ${isOffline ? 'bg-green-50 dark:bg-green-950/20 border-green-500' : 'bg-blue-50 dark:bg-blue-950/20 border-blue-500'}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-semibold">Current Status:</span>
                    <Badge variant={isOffline ? "default" : "secondary"}>
                      {isOffline ? 'Offline Mode Active' : 'Online Mode'}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {isOffline 
                      ? '✓ All features remain fully functional. AI processing, encryption, and document management continue to work seamlessly.'
                      : 'Click "Toggle Connection" in the header to simulate offline mode and see how QuickNotes Pro 2.0 maintains full functionality.'}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-card rounded-lg border">
                    <Database className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-semibold mb-1">Local Storage</h4>
                    <p className="text-sm text-muted-foreground">
                      SQLite database stores all documents locally
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border">
                    <Zap className="w-6 h-6 text-yellow-600 mb-2" />
                    <h4 className="font-semibold mb-1">Fast Performance</h4>
                    <p className="text-sm text-muted-foreground">
                      10x faster than cloud-dependent alternatives
                    </p>
                  </div>
                  
                  <div className="p-4 bg-card rounded-lg border">
                    <CheckCircle2 className="w-6 h-6 text-green-600 mb-2" />
                    <h4 className="font-semibold mb-1">Always Available</h4>
                    <p className="text-sm text-muted-foreground">
                      No sync issues or connectivity problems
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-blue-600" />
                    Competitive Advantage
                  </h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between p-2 bg-muted rounded">
                      <span>Evernote</span>
                      <Badge variant="destructive">Limited Offline</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted rounded">
                      <span>Notion</span>
                      <Badge variant="destructive">Manual Setup Required</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-muted rounded">
                      <span>OneNote</span>
                      <Badge variant="destructive">Cloud Dependent</Badge>
                    </div>
                    <div className="flex items-center justify-between p-2 bg-green-50 dark:bg-green-950/20 rounded border border-green-500">
                      <span className="font-semibold">QuickNotes Pro 2.0</span>
                      <Badge className="bg-green-600">True Offline-First</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* AI Features Tab */}
          <TabsContent value="ai" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  Offline AI Processing
                </CardTitle>
                <CardDescription>
                  Intelligent features without compromising privacy
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-600" />
                    Unique Market Position
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    QuickNotes Pro 2.0 is the <strong>only solution</strong> offering sophisticated AI capabilities 
                    that work completely offline. No competitor can match this combination of intelligence and privacy.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <Search className="w-6 h-6 text-blue-600 mb-2" />
                      <CardTitle className="text-base">Semantic Search</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Find documents by meaning, not just keywords. AI understands context and intent.
                      </p>
                      <Button 
                        onClick={handleAIDemo} 
                        disabled={aiProcessing}
                        className="w-full"
                        variant="outline"
                      >
                        {aiProcessing ? 'Processing...' : 'Try Semantic Search'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Network className="w-6 h-6 text-indigo-600 mb-2" />
                      <CardTitle className="text-base">Knowledge Graph</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Automatically visualize relationships between concepts and documents.
                      </p>
                      <Button 
                        onClick={handleAIDemo} 
                        disabled={aiProcessing}
                        className="w-full"
                        variant="outline"
                      >
                        {aiProcessing ? 'Generating...' : 'Generate Graph'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Sparkles className="w-6 h-6 text-purple-600 mb-2" />
                      <CardTitle className="text-base">Concept Extraction</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI identifies key concepts and themes from your documents automatically.
                      </p>
                      <Button 
                        onClick={handleAIDemo} 
                        disabled={aiProcessing}
                        className="w-full"
                        variant="outline"
                      >
                        {aiProcessing ? 'Extracting...' : 'Extract Concepts'}
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <Activity className="w-6 h-6 text-green-600 mb-2" />
                      <CardTitle className="text-base">Research Assistant</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        AI-powered research assistance for analysis and synthesis.
                      </p>
                      <Button 
                        onClick={handleAIDemo} 
                        disabled={aiProcessing}
                        className="w-full"
                        variant="outline"
                      >
                        {aiProcessing ? 'Analyzing...' : 'Start Research'}
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {aiProcessing && (
                  <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-500 animate-pulse">
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-blue-600 animate-spin" />
                      <div>
                        <p className="font-semibold text-sm">AI Processing Active</p>
                        <p className="text-xs text-muted-foreground">
                          Processing locally on your device - no data sent to cloud
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Tab */}
          <TabsContent value="security" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Enterprise-Grade Security
                </CardTitle>
                <CardDescription>
                  Military-grade encryption and zero-knowledge architecture
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 rounded-lg border border-green-500">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      Security Score: 93%
                    </h4>
                    <Badge className="bg-green-600">Verified</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Independently verified security architecture with comprehensive audit trail
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      Encryption & Privacy
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Client-side Encryption</span>
                        <Badge variant="secondary">AES-256-GCM</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Password Hashing</span>
                        <Badge variant="secondary">PBKDF2</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Multi-Factor Auth</span>
                        <Badge variant="secondary">TOTP</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Zero-Knowledge</span>
                        <Badge className="bg-green-600">Active</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold flex items-center gap-2">
                      <Key className="w-4 h-4" />
                      Authentication & Access
                    </h4>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Account Lockout</span>
                        <Badge variant="secondary">5 Attempts</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Session Timeout</span>
                        <Badge variant="secondary">Configurable</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Backup Codes</span>
                        <Badge variant="secondary">10 Codes</Badge>
                      </div>
                      <div className="flex items-center justify-between p-2 bg-muted rounded text-sm">
                        <span>Audit Logging</span>
                        <Badge className="bg-green-600">7-Year Retention</Badge>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3">Compliance Certifications</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <Shield className="w-6 h-6 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold">GDPR</p>
                      <p className="text-xs text-muted-foreground">EU Compliant</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <Shield className="w-6 h-6 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold">HIPAA</p>
                      <p className="text-xs text-muted-foreground">Healthcare</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <Shield className="w-6 h-6 text-purple-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold">SOX</p>
                      <p className="text-xs text-muted-foreground">Financial</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <Shield className="w-6 h-6 text-indigo-600 mx-auto mb-1" />
                      <p className="text-sm font-semibold">ISO 27001</p>
                      <p className="text-xs text-muted-foreground">Security</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Advanced Features Tab */}
          <TabsContent value="advanced" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  Advanced Features
                </CardTitle>
                <CardDescription>
                  Cutting-edge capabilities that set QuickNotes Pro 2.0 apart
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="border-2 border-purple-500/20">
                    <CardHeader>
                      <Glasses className="w-8 h-8 text-purple-600 mb-2" />
                      <CardTitle className="text-base">Cross-Reality Integration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        First-mover advantage in AR/VR document organization. Interact with your notes 
                        in immersive 3D environments.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>AR workspace visualization</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>VR document navigation</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Spatial organization</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-blue-500/20">
                    <CardHeader>
                      <Users className="w-8 h-8 text-blue-600 mb-2" />
                      <CardTitle className="text-base">Real-time Collaboration</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        WebSocket-powered collaboration with enterprise security. Work together 
                        without compromising privacy.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Live document editing</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Encrypted communication</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Offline sync capability</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-indigo-500/20">
                    <CardHeader>
                      <Server className="w-8 h-8 text-indigo-600 mb-2" />
                      <CardTitle className="text-base">Industry-Specific Solutions</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Specialized workflows and templates for various professional sectors.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary">Healthcare</Badge>
                        <Badge variant="secondary">Legal</Badge>
                        <Badge variant="secondary">Finance</Badge>
                        <Badge variant="secondary">Education</Badge>
                        <Badge variant="secondary">Research</Badge>
                        <Badge variant="secondary">Creative</Badge>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-green-500/20">
                    <CardHeader>
                      <Globe className="w-8 h-8 text-green-600 mb-2" />
                      <CardTitle className="text-base">Plugin Ecosystem</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Extensible architecture with developer platform for custom integrations.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Custom plugin support</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>API integration hub</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600" />
                          <span>Developer marketplace</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-yellow-600" />
                    Performance Metrics
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <p className="text-2xl font-bold text-blue-600">10x</p>
                      <p className="text-xs text-muted-foreground">Faster than cloud</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <p className="text-2xl font-bold text-green-600">10K+</p>
                      <p className="text-xs text-muted-foreground">Documents supported</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <p className="text-2xl font-bold text-purple-600">100%</p>
                      <p className="text-xs text-muted-foreground">Offline capability</p>
                    </div>
                    <div className="p-3 bg-card rounded-lg border text-center">
                      <p className="text-2xl font-bold text-indigo-600">93%</p>
                      <p className="text-xs text-muted-foreground">Security score</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <Card className="mt-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-3">Ready to Transform Your Productivity?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Experience the only offline-first document organizer with AI capabilities, 
              zero-knowledge privacy, and enterprise-grade security.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2">
                <FileText className="w-4 h-4" />
                Download QuickNotes Pro 2.0
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent text-white border-white hover:bg-white/10">
                <Eye className="w-4 h-4" />
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-sm text-muted-foreground">
            <p className="mb-2">
              QuickNotes Pro 2.0 - The Future of Offline Document Organization
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <span>✓ Offline-First AI</span>
              <span>✓ Zero-Knowledge Privacy</span>
              <span>✓ Enterprise Security</span>
              <span>✓ Cross-Reality Ready</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
