
import * as React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';



const skillSections = [
  {
    title: 'Core BI & Data Skills',
    items: [
      'BI Development Lifecycle',
      'Data Warehouse Design',
      'ETL Processes & Tools',
      'SQL (including Transactional SQL)',
      'Dashboard Development & Data Visualization',
      'Business Requirements Analysis',
      'Data Modeling',
    ],
  },
  {
    title: 'Programming & Markup Languages',
    items: [
      'SQL',
      <span key="python">Python <span style={{ fontSize: '0.9em', color: '#888' }}>(intermediate)</span></span>,
      <span key="csharp">C# <span style={{ fontSize: '0.9em', color: '#888' }}>(basic)</span></span>,
      <span key="html">HTML / XML <span style={{ fontSize: '0.9em', color: '#888' }}>(basic)</span></span>,
      <span key="java">Java <span style={{ fontSize: '0.9em', color: '#888' }}>(basic)</span></span>,
      <span key="js">JavaScript <span style={{ fontSize: '0.9em', color: '#888' }}>(basic)</span></span>,
      <span key="json">JSON <span style={{ fontSize: '0.9em', color: '#888' }}>(basic)</span></span>,
    ],
  },
  {
    title: 'Tools, Technologies & Platforms',
    items: [
      'MicroStrategy (MCEP Certified)',
      'Pyramid Analytics (Level 1 Certified)',
      'SQL Server',
      'IDEs (Integrated Development Environments)',
      'Linux Server Setup & Maintenance',
    ],
  },
  {
    title: 'Project & Workflow Skills',
    items: [
      'Project Management',
      'BI Team Leadership',
      'Agile Workflows',
      'Cross-functional Collaboration',
    ],
  },
];

const Skills = () => (
  <Box id="skills" sx={{ maxWidth: 700, mx: 'auto', my: 4 }}>
    <Typography variant="h4" component="h2" gutterBottom>Skills</Typography>
    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', mb: 2 }}>
      Note: Proficiency levels vary; not all languages listed are at an advanced level. See notes below.
    </Typography>
    {skillSections.map((section, idx) => (
      <Paper key={section.title} elevation={2} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" component="h3" gutterBottom>{section.title}</Typography>
        <List dense>
          {section.items.map((item, i) => (
            <ListItem key={i} disablePadding>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
        {idx < skillSections.length - 1 && <Divider sx={{ mt: 2 }} />}
      </Paper>
    ))}
  </Box>
);

export default Skills;
