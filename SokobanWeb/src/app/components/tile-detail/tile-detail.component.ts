import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Tile from '../../data/Tile';
import {TileService} from '../../services/tile.service';
import {TILE_SIZES} from "../tile/tile.component";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-tile-detail',
  templateUrl: './tile-detail.component.html',
  styleUrls: ['./tile-detail.component.scss']
})
export class TileDetailComponent implements OnInit {
  @Input()
  tile: Tile;

  @Output()
  tileChangeEmitter: EventEmitter<Tile>;

  tileSize = TILE_SIZES.MEDIUM;

  constructor(private tileService: TileService) {
    this.tileChangeEmitter = new EventEmitter();
  }

  ngOnInit(): void {
  }

  handleFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onloadend = (event) => {
        if(typeof reader.result === 'string') {
          this.tile.sprite = reader.result;
        }
      };
      reader.readAsDataURL(event.target.files[0])
    }
  }

  handleNameChange(event): void {
    this.tile.name = event.target.value || "";
  }

  handleSolidChange(event): void {
    this.tile.solid = event.target.checked || false;
  }

  submit(form: NgForm) {
    if (form.status === "VALID") {
      this.tileService.putTile(this.tile).subscribe(() => this.emitChange());
    }
  }

  deleteTile() {
    if (this.tile && this.tile.id) {
      this.tileService.deleteTile(this.tile.id).subscribe(() => {
        this.emitChange();
        this.tile = undefined;
      });
    }
  }

  emitChange(): void {
    this.tileChangeEmitter.emit(this.tile);
  }
}
