
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera, Edit3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const PersonalInfoPage = () => {
  const navigate = useNavigate();
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
    <div className="min-h-screen bg-dark-primary">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-dark-primary border-b border-dark-tertiary">
        <div className="flex items-center justify-between p-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate(-1)}
            className="text-white hover:bg-dark-secondary"
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>
          <h1 className="text-xl font-semibold text-white">Personal Info</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsEditing(!isEditing)}
            className="text-FlexForge-orange hover:bg-dark-secondary"
          >
            <Edit3 className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Profile Photo Section */}
      <div className="p-6 border-b border-dark-tertiary">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-orange rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-white">JD</span>
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-FlexForge-orange rounded-full flex items-center justify-center">
                <Camera className="h-4 w-4 text-white" />
              </button>
            )}
          </div>
          <p className="text-white/70 text-sm">Profile Photo</p>
        </div>
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
    </div>
  );
};

export default PersonalInfoPage;
