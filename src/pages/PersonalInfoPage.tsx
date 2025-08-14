import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Edit3 } from 'lucide-react';
import { useState } from 'react';
import { ProfileLayout } from '../components/layout/ProfileLayout';

const PersonalInfoPage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    height: '180',
    weight: '75'
  });

  const handleSave = () => {
    // Handle save logic
    setIsEditing(false);
  };

  return (
    <ProfileLayout
      title="Personal Info"
      showBackButton={true}
    >
      {/* Edit Button in Header */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsEditing(!isEditing)}
          className="text-FlexForge-orange hover:bg-dark-secondary"
        >
          <Edit3 className="h-5 w-5" />
        </Button>
      </div>

      {/* Personal Information Form */}
      <div className="p-4 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-white/80">First Name</Label>
            <Input
              id="firstName"
              value={profile.firstName}
              onChange={(e) => setProfile(prev => ({ ...prev, firstName: e.target.value }))}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
            <Input
              id="lastName"
              value={profile.lastName}
              onChange={(e) => setProfile(prev => ({ ...prev, lastName: e.target.value }))}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-white/80">Email</Label>
          <Input
            id="email"
            type="email"
            value={profile.email}
            onChange={(e) => setProfile(prev => ({ ...prev, email: e.target.value }))}
            disabled={!isEditing}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-white/80">Phone Number</Label>
          <Input
            id="phone"
            value={profile.phone}
            onChange={(e) => setProfile(prev => ({ ...prev, phone: e.target.value }))}
            disabled={!isEditing}
            className="mt-1"
          />
        </div>

        <div>
          <Label htmlFor="dateOfBirth" className="text-white/80">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            type="date"
            value={profile.dateOfBirth}
            onChange={(e) => setProfile(prev => ({ ...prev, dateOfBirth: e.target.value }))}
            disabled={!isEditing}
            className="mt-1"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="height" className="text-white/80">Height (cm)</Label>
            <Input
              id="height"
              value={profile.height}
              onChange={(e) => setProfile(prev => ({ ...prev, height: e.target.value }))}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="weight" className="text-white/80">Weight (kg)</Label>
            <Input
              id="weight"
              value={profile.weight}
              onChange={(e) => setProfile(prev => ({ ...prev, weight: e.target.value }))}
              disabled={!isEditing}
              className="mt-1"
            />
          </div>
        </div>
      </div>

      {/* Save Button */}
      {isEditing && (
        <div className="p-4">
          <Button
            onClick={handleSave}
            className="w-full bg-gradient-orange text-white"
          >
            Save Changes
          </Button>
        </div>
      )}
    </ProfileLayout>
  );
};


export default PersonalInfoPage;