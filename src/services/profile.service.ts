import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from 'src/models/profile';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }
  
  getProfileById(id: number | string): Observable<Profile> {
    return this.http.get<Profile>("http://localhost:4010/profiles/" + id);
  }  
  
  update(profile: Profile):Observable<Object>{
    return this.http.put("http://localhost:4010/profiles/" + profile.id, profile);
  }
}
